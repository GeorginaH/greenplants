<?php

declare(strict_types=1);

namespace Drupal\sask_feature_field\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Render\Markup;
use Drupal\fontawesome\Plugin\Field\FieldFormatter\FontAwesomeIconFormatter;

/**
 * Plugin implementation of the 'sask_feature_field_default' formatter.
 *
 * @FieldFormatter(
 *   id = "sask_feature_field_default",
 *   label = @Translation("Default"),
 *   field_types = {"sask_feature_field"}
 * )
 */
final class SaskFeatureFieldDefaultFormatter extends FontAwesomeIconFormatter {

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $elements = parent::viewElements($items, $langcode);
    foreach ($items as $delta => $item) {

      if ($item->description) {
        $elements[$delta]['#description'] = [
          '#type' => 'item',
          '#title' => $this->t('Description'),
          '#title_display' => 'invisible',
          '#markup' => Markup::create($item->description),
        ];
      }

    }

    return $elements;
  }

}
