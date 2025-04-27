import type { Schema, Struct } from '@strapi/strapi';

export interface FieldsCta extends Struct.ComponentSchema {
  collectionName: 'components_fields_ctas';
  info: {
    displayName: 'CTA';
    icon: 'cursor';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    link: Schema.Attribute.String;
    style: Schema.Attribute.Enumeration<['primary', 'secondary']> &
      Schema.Attribute.DefaultTo<'primary'>;
    text: Schema.Attribute.String;
  };
}

export interface FieldsSeo extends Struct.ComponentSchema {
  collectionName: 'components_fields_seos';
  info: {
    displayName: 'SEO';
    icon: 'chartPie';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    shareImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface FieldsSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_fields_social_links';
  info: {
    displayName: 'social-link';
    icon: 'link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.String;
    platform: Schema.Attribute.Enumeration<
      [
        'Instagram',
        'Twitter',
        'Threads',
        'TikTok',
        'LinkedIn',
        'YouTube',
        'Facebook',
        'Medium',
        'Reddit',
        'Substack',
      ]
    >;
  };
}

export interface SectionsFeatureGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_grids';
  info: {
    displayName: 'FeatureGrid';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    icon: 'crown';
  };
  attributes: {
    backgroundMedia: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    paragraph: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'fields.cta': FieldsCta;
      'fields.seo': FieldsSeo;
      'fields.social-link': FieldsSocialLink;
      'sections.feature-grid': SectionsFeatureGrid;
      'sections.hero': SectionsHero;
    }
  }
}
