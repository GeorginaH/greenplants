<?php

declare(strict_types=1);

namespace Drupal\sask_feature_field\Plugin\Field\FieldWidget;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\fontawesome\Plugin\Field\FieldWidget\FontAwesomeIconWidget;
use Symfony\Component\Validator\ConstraintViolationInterface;

/**
 * Defines the 'sask_feature_field' field widget.
 *
 * @FieldWidget(
 *   id = "sask_feature_field",
 *   label = @Translation("Sask feature field"),
 *   field_types = {"sask_feature_field"},
 * )
 */
final class SaskFeatureFieldWidget extends FontAwesomeIconWidget {

  /**
   * {@inheritdoc}
   */
  public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state) {
    $element = parent::formElement($items, $delta, $element, $form, $form_state);
    $element['description'] = [
      '#title' => $this->t('Description'),
      '#type' => 'text_format',
      '#weight' => 1,
      '#format' => 'full_html',
      '#default_value' => $items[$delta]->get('description')->getValue(),
    ];
//    $t = $items[$delta]->get('description')->getValue();

    return $element;
  }

  /**
   * {@inheritdoc}
   */
  public function errorElement(array $element, ConstraintViolationInterface $violation, array $form, FormStateInterface $form_state) {
    $violation_property = $violation->arrayPropertyPath[0];
    if ($violation_property) {
      return $violation_property;
    }
    else {
      return $element;
    }
  }

  /**
   * {@inheritdoc}
   */
//  public function massageFormValues(array $values, array $form, FormStateInterface $form_state) {
//    $values = parent::massageFormValues($values, $form, $form_state);
//    foreach ($values as $delta => $value) {
//      if ($value['description'] === '') {
//        $values[$delta]['description'] = NULL;
//      }
//    }
//    return $values;
//  }

}
