<?php

declare(strict_types=1);

namespace Drupal\sask_feature_field\Plugin\Field\FieldType;

use Drupal\Core\Field\FieldStorageDefinitionInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\TypedData\DataDefinition;
use Drupal\fontawesome\Plugin\Field\FieldType\FontAwesomeIcon;

/**
 * Defines the 'sask_feature_field' field type.
 *
 * @FieldType(
 *   id = "sask_feature_field",
 *   label = @Translation("Sask feature field"),
 *   category = @Translation("General"),
 *   default_widget = "sask_feature_field",
 *   default_formatter = "sask_feature_field_default"
 * )
 */
final class SaskFeatureFieldItem extends FontAwesomeIcon {

  /**
   * {@inheritdoc}
   */
  public static function defaultFieldSettings() {
    return [
      'default_format' => 'full_html',
    ] + parent::defaultFieldSettings();
  }

  /**
   * {@inheritdoc}
   */
  public function isEmpty() {
    parent::isEmpty();
    if ($this->description !== NULL) {
      return FALSE;
    }
    return TRUE;
  }

  /**
   * {@inheritdoc}
   */
  public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition) {
    $properties = parent::propertyDefinitions($field_definition);
    $properties['description'] = DataDefinition::create('string')
      ->setLabel(\t('Description'));
    $properties['description_format'] = DataDefinition::create('string')
      ->setLabel(\t('Description text format'));

    return $properties;
  }

  /**
   * {@inheritdoc}
   */
  public static function schema(FieldStorageDefinitionInterface $field_definition) {
    $schema = parent::schema($field_definition);
    $schema['columns']['description'] = [
      'type' => 'text',
      'size' => 'big',
      ];

    $schema['columns']['description_format'] = [
      'type' => 'varchar',
      'length' => 255,
      'not null' => FALSE,
      ];

    return $schema;
  }

  /**
   * {@inheritdoc}
   */
  public function fieldSettingsForm(array $form, FormStateInterface $form_state): array {
    $element = [];
    // Get a list of formats that the current user has access to.
    $formats = \filter_formats();
    $filter_options = [];
    foreach ($formats as $format) {
      $filter_options[$format->get('format')] = $format->get('name');
    }
    // Format select input for field settings.
    $element['default_format'] = [
      '#type' => 'select',
      '#title' => $this->t('Default text format'),
      '#default_value' => $this->getSetting('default_format'),
      '#options' => $filter_options,
      '#access' => \count($formats) > 1,
      '#description' => $this->t('Default text format to filter field description.'),
    ];

    return $element;
  }

  /**
   * {@inheritdoc}
   */
  public function setValue($values, $notify = TRUE): void {
    if (\is_array($values) && \array_key_exists('description', $values) && \is_array($values['description'])) {
      $values['description_format'] = $values['description']['format'];
      $values['description'] = $values['description']['value'];
    }
    parent::setValue($values, $notify);
  }

}
