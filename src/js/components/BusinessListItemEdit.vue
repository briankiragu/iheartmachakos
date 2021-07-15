<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="business-list-item-edit__trigger btn"
    data-toggle="modal"
    :data-target="`#business${business.directoryIdx}Backdrop`"
    v-bind="$attrs"
  >
    <slot>Edit Business</slot>
  </button>

  <!-- Modal -->
  <teleport to="#business-modals">
    <div
      :id="`business${business.directoryIdx}Backdrop`"
      class="modal fade"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      :aria-labelledby="`business${business.directoryIdx}BackdropLabel`"
      aria-hidden="true"
    >
      <form class="modal-dialog" @submit.prevent="onSubmit">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              :id="`business${business.directoryIdx}BackdropLabel`"
              class="modal-title"
            >
              Edit {{ business.title }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <!-- Modal body. -->
          <div class="modal-body">
            <!-- Title. -->
            <div class="form-group">
              <label :for="`business-${business.directoryIdx}-title`">
                Title
              </label>
              <input
                :id="`business-${business.directoryIdx}-title`"
                v-model="businessForm.title"
                type="text"
                class="form-control"
                placeholder="What is this business called?"
                autocomplete="organization"
                required
              />
            </div>

            <div class="form-row">
              <!-- Category. -->
              <div v-if="categories" class="form-group col-md-7">
                <label :for="`business-${business.directoryIdx}-category`">
                  Category
                </label>
                <select
                  :id="`business-${business.directoryIdx}-category`"
                  v-model="businessForm.category"
                  class="custom-select"
                  required
                >
                  <option value="" disabled>Open this select menu</option>
                  <option
                    v-for="category of categories"
                    :key="`category-${category.param}`"
                    :value="category.param"
                  >
                    {{ toTitle(category.title) }}
                  </option>
                </select>
              </div>

              <!-- City. -->
              <div class="form-group col">
                <label :for="`business-${business.directoryIdx}-city`">
                  City
                </label>
                <input
                  :id="`business-${business.directoryIdx}-city`"
                  v-model="businessForm.city"
                  type="text"
                  class="form-control"
                  placeholder="Where is this business"
                  autocomplete="address-level2"
                  required
                />
              </div>
            </div>

            <!-- Website. -->
            <div class="form-group">
              <label :for="`business-${business.directoryIdx}-website`">
                Website
              </label>
              <input
                :id="`business-${business.directoryIdx}-website`"
                v-model="businessForm.website"
                type="url"
                class="form-control"
                placeholder="https://example.com"
                autocomplete="url"
              />
            </div>

            <div class="form-group">
              <label :for="`business-${business.directoryIdx}-notes`">
                Notes
              </label>
              <textarea
                :id="`business-${business.directoryIdx}-notes`"
                v-model="businessForm.notes"
                class="form-control"
                rows="3"
                placeholder="Any additional information?"
              ></textarea>
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              :class="{ disabled: isLoading }"
            >
              Add new business
            </button>
          </div>
        </div>
      </form>
    </div>
  </teleport>
</template>

<script lang="ts">
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { defineComponent, inject, Ref, ref } from 'vue';
import { IBusiness, IBusinessForm, ICategory } from '../../interfaces';
import useBackend from '../composables/useBackend';
import useFormatting from '../composables/useFormatting';

/* eslint-disable no-console */
export default defineComponent({
  name: 'BusinessListItemEdit',
  props: {
    business: { type: Object as () => IBusiness, default: () => {} },
  },
  setup(props) {
    // Set the loading state.
    const isLoading: Ref<boolean> = ref(false);

    // Retrive the categories from the parent component.
    const categories: undefined | ICategory[] = inject('categories');

    // Get backend properties.
    const { updateBusiness } = useBackend();

    // Formatting methods.
    const { toTitle } = useFormatting();

    // Populate the form values.
    const businessForm: Ref<IBusinessForm> = ref({
      title: props.business.title,
      category: props.business.category.toLowerCase(),
      city: props.business.city,
      website: props.business.website ? props.business.website : '',
      notes: '',
    });

    /**
     * When a user submits their input.
     */
    const onSubmit = (): void => {
      // Set the state to loading.
      isLoading.value = true;

      // Send the request.
      updateBusiness(props.business.directoryIdx, businessForm.value)
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
input,
select,
textarea,
button {
  font-size: 0.95rem;
}

.business-list-item-edit__trigger {
  background-color: rgb(187, 176, 176);
}
</style>
