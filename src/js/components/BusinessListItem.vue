<template>
  <div class="business-list-item card border-bottom">
    <div :id="`business-${business.directoryIdx}-heading`" class="card-header">
      <button
        class="
          btn btn-link btn-block
          text-left
          d-flex
          justify-content-between
          align-items-center
        "
        type="button"
        data-toggle="collapse"
        :data-target="`#business-${business.directoryIdx}-collapse`"
        aria-expanded="false"
        :aria-controls="`business-${business.directoryIdx}-collapse`"
      >
        <div class="business-list-item__title">
          <h2 class="business-list-item__heading mb-2 mb-md-1">
            {{ toTitle(business.title) }}
          </h2>
          <h4
            class="business-list-item__subheading mb-0 d-flex align-items-start"
          >
            <!-- <i class="fas fa-store"></i> -->
            <i v-if="hasOwner" class="fas fa-user-check"></i>
            {{ toTitle(business.category) }} in
            <em class="ml-1">{{ toTitle(business.city) }}</em>
          </h4>
        </div>

        <div class="business-list-item__icon">
          <i class="fas fa-caret-down"></i>
        </div>
      </button>
    </div>

    <div
      :id="`business-${business.directoryIdx}-collapse`"
      class="collapse"
      :aria-labelledby="`business-${business.directoryIdx}-heading`"
      :data-parent="`#business-directory-accordion`"
    >
      <div class="card-body">
        <!-- Business info. -->
        <p class="mb-2">
          <span v-if="hasOwner">
            This business is locally owned by
            <strong>{{ toTitle(business.owner) }}.</strong>
          </span>
          <a
            v-if="hasWebsite"
            class="business-list-item__link ml-1"
            :href="`${business.website}`"
            target="_blank"
          >
            <i class="fas fa-external-link-alt"></i>
          </a>
        </p>

        <!-- Edit button. -->
        <BusinessForm :order="business.directoryIdx" :business="business" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable import/extensions */
import { computed, defineAsyncComponent, defineComponent } from 'vue';
import { IBusiness } from '../../interfaces';
import useFormatting from '../composables/useFormatting';

const BusinessForm = defineAsyncComponent(() => import('./BusinessForm.vue'));

export default defineComponent({
  name: 'BusinessListItem',
  components: { BusinessForm },
  props: {
    business: { type: Object as () => IBusiness, default: () => {} },
  },

  setup(props) {
    // Get formatting methods.
    const { toTitle } = useFormatting();

    // Check if the business has an owner.
    const hasOwner = computed(() => !!props.business.owner);

    // Check if the business has an website.
    const hasWebsite = computed(() => !!props.business.website);

    // Check if the business has any data.
    const hasData = computed(() => hasOwner.value || hasWebsite.value);

    return { hasOwner, hasWebsite, hasData, toTitle };
  },
});
</script>

<style lang="scss" scoped>
$primary-color: #494545;
$accent-color: #184f97;

.business-list-item {
  margin-bottom: 15px;

  button {
    box-shadow: none;
    text-decoration: none;
  }

  &__heading {
    color: hsl(0, 5%, 22%);
    font-size: 1.4rem;
  }

  &__subheading {
    color: rgba($primary-color, 1);
    font-size: 0.94rem;
    font-weight: 400;

    i {
      margin-right: 10px;
    }
  }

  &__link {
    color: $accent-color;
  }
}
</style>
