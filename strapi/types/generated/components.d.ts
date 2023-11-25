import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoMeta extends Schema.Component {
  collectionName: 'components_seo_metas';
  info: {
    displayName: 'Meta';
    icon: 'medium';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String;
    author: Attribute.String;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.meta': SeoMeta;
    }
  }
}
