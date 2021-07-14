<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary"
    data-toggle="modal"
    data-target="#staticBackdrop"
  >
    New Business
  </button>

  <!-- Modal -->
  <teleport to="#business-modals">
    <div
      id="staticBackdrop"
      class="modal fade"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="staticBackdropLabel" class="modal-title">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { defineComponent, inject, Ref, ref } from 'vue';
import { IBusinessForm, ICategory } from '../../interfaces';
import useBackend from '../composables/useBackend';
import useFormatting from '../composables/useFormatting';

/* eslint-disable no-console */
export default defineComponent({
  name: 'BusinessAdd',

  setup() {
    // Set the loading state.
    const isLoading: Ref<boolean> = ref(false);

    // Retrive the categories from the parent component.
    const categories: undefined | ICategory[] = inject('categories');

    // Get backend properties.
    const { storeBusiness } = useBackend();

    // Formatting methods.
    const { toTitle } = useFormatting();

    // Populate the form values.
    const businessForm: Ref<IBusinessForm> = ref({
      title: '',
      category: '',
      city: '',
      website: '',
      notes: '',
    });

    /**
     * When a user submits their input.
     */
    const onSubmit = (): void => {
      // Set the state to loading.
      isLoading.value = true;

      // Send the request.
      storeBusiness(businessForm.value)
        .then((res) => console.log(res))
        .catch((err) => console.error(err))
        .finally(() => {
          isLoading.value = false;
        });
    };

    return { isLoading, categories, businessForm, toTitle, onSubmit };
  },
});
</script>

<style lang="scss" scoped>
.business-list-add {
  &__trigger {
    font-size: 0.9rem;
    font-weight: normal;
  }
}
</style>
