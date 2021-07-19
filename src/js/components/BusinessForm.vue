<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="business-list-item-edit__trigger btn btn-primary"
    data-toggle="modal"
    :data-target="`#business${order}Backdrop`"
    v-bind="$attrs"
  >
    <slot>{{ text.trigger }}</slot>
  </button>

  <!-- Modal -->
  <teleport to="#business-modals">
    <div
      :id="`business${order}Backdrop`"
      class="modal fade"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      :aria-labelledby="`business${order}BackdropLabel`"
      aria-hidden="true"
    >
      <form class="modal-dialog" @submit.prevent="onSubmit">
        <div class="modal-content">
          <div class="modal-header">
            <h5 :id="`business${order}BackdropLabel`" class="modal-title">
              {{ text.title }}
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
              <label :for="`business-${order}-title`"> Title </label>
              <input
                :id="`business-${order}-title`"
                v-model="businessForm.title"
                type="text"
                class="form-control"
                placeholder="What is this business called?"
                autocomplete="organization"
                required
              />
            </div>

            <!-- Category. -->
            <div v-if="categories" class="form-group">
              <label :for="`business-${order}-category`">Category</label>
              <input
                :id="`business-${order}-category`"
                v-model="businessForm.category"
                type="text"
                class="form-control"
                placeholder="Select a category or add a new one"
                :list="`business-${order}-categories`"
                required
              />
              <datalist :id="`business-${order}-categories`">
                <option
                  v-for="category of categories"
                  :key="`category-${category.param}`"
                  :value="category.param"
                ></option>
              </datalist>
            </div>

            <div class="form-row">
              <!-- City. -->
              <div class="form-group col-md-4">
                <label :for="`business-${order}-city`"> City </label>
                <input
                  :id="`business-${order}-city`"
                  v-model="businessForm.city"
                  type="text"
                  class="form-control"
                  placeholder="Where is this business"
                  autocomplete="address-level2"
                  required
                />
              </div>

              <!-- Website. -->
              <div class="form-group col">
                <label :for="`business-${order}-website`"> Website </label>
                <input
                  :id="`business-${order}-website`"
                  v-model="businessForm.website"
                  type="url"
                  class="form-control"
                  placeholder="https://example.com"
                  autocomplete="url"
                />
              </div>
            </div>

            <div class="form-group">
              <label :for="`business-${order}-notes`"> Notes </label>
              <textarea
                :id="`business-${order}-notes`"
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
              {{ text.submit }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </teleport>
</template>

<script lang="ts">
/* eslint-disable no-restricted-globals */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { computed, defineComponent, inject, Ref, ref } from 'vue';
import { IBusiness, IBusinessForm, ICategory } from '../../interfaces';
import useBackend from '../composables/useBackend';
import useFormatting from '../composables/useFormatting';

/* eslint-disable no-console */
export default defineComponent({
  name: 'BusinessForm',

  props: {
    order: { type: [String, Number], default: '' },
    action: { type: String, default: 'update' },
    business: {
      type: Object as () => IBusiness,
      default: () => {},
      required: false,
    },
  },

  setup(props) {
    // Get backend properties.
    const { storeBusiness, updateBusiness } = useBackend();

    // Formatting methods.
    const { toTitle } = useFormatting();

    // Get the form text content.
    const text: { [key: string]: string } = {
      trigger: props.action === 'update' ? 'Suggest an edit' : 'New Business',
      title:
        props.action === 'update'
          ? `Edit ${props.business.title}`
          : 'Add a new business',
      submit:
        props.action === 'update' ? 'Edit this business' : 'Add this business',
    };

    // Set the loading state.
    const isLoading: Ref<boolean> = ref(false);

    // Retrive the categories from the parent component.
    const categories: undefined | Ref<ICategory[]> = inject('categories');

    // Populate the form values.
    const businessForm: Ref<IBusinessForm> = ref({
      title: props.business ? props.business.title : '',
      category: props.business ? props.business.category.toLowerCase() : '',
      city: props.business ? props.business.city : '',
      website: props.business
        ? props.business.website
          ? props.business.website
          : ''
        : '',
      notes: '',
    });

    // Check if the 'other' category option was selected.
    const isOther = computed(
      () =>
        !categories?.value
          ?.map((category) => category.param)
          .includes(businessForm.value.category)
    );

    /**
     * When a user submits their input.
     */
    const onSubmit = async (): Promise<void> => {
      // Set the state to loading.
      isLoading.value = true;

      // Send the request.
      const response: any =
        props.action === 'update'
          ? await updateBusiness(
              props.business.directoryIdx,
              businessForm.value
            )
          : await storeBusiness(businessForm.value);

      // Refresh the page if it was successful.
      if (response.status === 'success') {
        location.reload();
      }

      // Remove the loading state.
      isLoading.value = false;
    };

    return {
      text,
      categories,
      businessForm,
      isLoading,
      isOther,
      toTitle,
      onSubmit,
    };
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
</style>
