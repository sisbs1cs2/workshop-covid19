<template>
  <ul :class="$style.container">
    <li :class="[$style.box]">
      <div :class="$style.content">
        <span>{{ $t('(1)新規陽性者数') }}</span>
        <value-with-translatable-unit
          :value="items['(1)新規陽性者数'].value"
          :unit="items['(1)新規陽性者数'].unit"
          :bold="items['(1)新規陽性者数'].bold"
        />
      </div>
    </li>
    <li :class="[$style.box, $style.parent]">
      <div :class="$style.content">
        <span>{{ $t('潜在・市中感染') }}</span>
      </div>
      <ul :class="$style.group">
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>
              {{
                $t(
                  '(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 '
                )
              }}
            </span>
            <value-with-translatable-unit
              :value="
                items[
                  '(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 '
                ].value
              "
              :unit="
                items[
                  '(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 '
                ].unit
              "
              :bold="
                items[
                  '(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 '
                ].bold
              "
            />
          </div>
        </li>
        <li :class="[$style.box, $style.parent]">
          <div :class="$style.content">
            <span>{{ $t('(3)新規陽性者における接触歴等不明者') }}</span>
          </div>
          <ul :class="$style.group">
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>{{ $t('人数') }}</span>
                <value-with-translatable-unit
                  :value="
                    items['(3)新規陽性者における接触歴等不明者（人数）'].value
                  "
                  :unit="
                    items['(3)新規陽性者における接触歴等不明者（人数）'].unit
                  "
                  :bold="
                    items['(3)新規陽性者における接触歴等不明者（人数）'].bold
                  "
                />
              </div>
            </li>
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>{{ $t('増加比') }}</span>
                <value-with-translatable-unit
                  :value="
                    items['(3)新規陽性者における接触歴等不明者（増加比）'].value
                  "
                  :unit="
                    items['(3)新規陽性者における接触歴等不明者（増加比）'].unit
                  "
                  :bold="
                    items['(3)新規陽性者における接触歴等不明者（増加比）'].bold
                  "
                />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import Vue from 'vue'

import ValueWithTranslatableUnit from '@/components/index/CardsMonitoring/MonitoringItemsOverview/Table/ValueWithTranslatableUnit.vue'
import { MonitoringItems } from '@/utils/formatMonitoringItems'

export default Vue.extend({
  components: {
    ValueWithTranslatableUnit,
  },
  props: {
    items: {
      type: Object as PropType<MonitoringItems>,
      required: true,
    },
  },
})
</script>

<style lang="scss" module>
@import '@/assets/monitoringItemsTableCommon.scss';
</style>
