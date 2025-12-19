export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      events: {
        Row: {
          event_id: number;
          name: string;
          date: string;
          theme: string | null;
          description: string | null;
          venue_id: number | null;
          is_active: boolean;
        };
        Insert: Partial<Database["public"]["Tables"]["events"]["Row"]> & {
          name: string;
          date: string;
        };
        Update: Partial<Database["public"]["Tables"]["events"]["Row"]>;
        Relationships: [
          {
            foreignKeyName: "events_venue_id_fkey";
            columns: ["venue_id"];
            referencedRelation: "venues";
            referencedColumns: ["venue_id"];
          }
        ];
      };
      venues: {
        Row: {
          venue_id: number;
          name: string;
          address_line_1: string | null;
          address_line_2: string | null;
          city: string | null;
          google_maps_url: string | null;
          transport_info: string | null;
          parking_info: string | null;
          accessibility_info: string | null;
        };
        Insert: Partial<Database["public"]["Tables"]["venues"]["Row"]> & {
          name: string;
        };
        Update: Partial<Database["public"]["Tables"]["venues"]["Row"]>;
        Relationships: [];
      };
      speakers: {
        Row: {
          speaker_id: number;
          full_name: string;
          title: string | null;
          organization: string | null;
          bio_short: string | null;
          bio_long: string | null;
          photo_url: string | null;
          talk_title: string | null;
          talk_description: string | null;
          social_links: Json | null;
        };
        Insert: Partial<Database["public"]["Tables"]["speakers"]["Row"]> & {
          full_name: string;
        };
        Update: Partial<Database["public"]["Tables"]["speakers"]["Row"]>;
        Relationships: [];
      };
      partners: {
        Row: {
          partner_id: number;
          name: string;
          tier: string | null;
          logo_url: string | null;
          website_url: string | null;
          description: string | null;
          is_active: boolean;
        };
        Insert: Partial<Database["public"]["Tables"]["partners"]["Row"]> & {
          name: string;
        };
        Update: Partial<Database["public"]["Tables"]["partners"]["Row"]>;
        Relationships: [];
      };
      team_members: {
        Row: {
          team_member_id: number;
          full_name: string;
          role: string | null;
          type: string | null;
          function_area: string | null;
          photo_url: string | null;
          display_order: number | null;
        };
        Insert: Partial<Database["public"]["Tables"]["team_members"]["Row"]> & {
          full_name: string;
        };
        Update: Partial<Database["public"]["Tables"]["team_members"]["Row"]>;
        Relationships: [];
      };
      agenda_items: {
        Row: {
          agenda_item_id: number;
          event_id: number;
          start_time: string;
          end_time: string;
          title: string;
          type: string | null;
          speaker_id: number | null;
          description: string | null;
          display_order: number | null;
        };
        Insert: Partial<Database["public"]["Tables"]["agenda_items"]["Row"]> & {
          event_id: number;
          start_time: string;
          end_time: string;
          title: string;
        };
        Update: Partial<Database["public"]["Tables"]["agenda_items"]["Row"]>;
        Relationships: [
          {
            foreignKeyName: "agenda_items_event_id_fkey";
            columns: ["event_id"];
            referencedRelation: "events";
            referencedColumns: ["event_id"];
          },
          {
            foreignKeyName: "agenda_items_speaker_id_fkey";
            columns: ["speaker_id"];
            referencedRelation: "speakers";
            referencedColumns: ["speaker_id"];
          }
        ];
      };
      registrations: {
        Row: {
          registration_id: number;
          event_id: number;
          full_name: string;
          email: string;
          phone: string | null;
          ticket_type: string | null;
          created_at: string;
          status: string | null;
        };
        Insert: Partial<
          Database["public"]["Tables"]["registrations"]["Row"]
        > & {
          event_id: number;
          full_name: string;
          email: string;
        };
        Update: Partial<Database["public"]["Tables"]["registrations"]["Row"]>;
        Relationships: [
          {
            foreignKeyName: "registrations_event_id_fkey";
            columns: ["event_id"];
            referencedRelation: "events";
            referencedColumns: ["event_id"];
          }
        ];
      };
      volunteer_applications: {
        Row: {
          volunteer_id: number;
          event_id: number;
          full_name: string;
          email: string;
          phone: string | null;
          university: string | null;
          interest_area: string | null;
          availability: string | null;
          cv_url: string | null;
          created_at: string;
          status: string | null;
        };
        Insert: Partial<
          Database["public"]["Tables"]["volunteer_applications"]["Row"]
        > & {
          event_id: number;
          full_name: string;
          email: string;
        };
        Update: Partial<
          Database["public"]["Tables"]["volunteer_applications"]["Row"]
        >;
        Relationships: [
          {
            foreignKeyName: "volunteer_applications_event_id_fkey";
            columns: ["event_id"];
            referencedRelation: "events";
            referencedColumns: ["event_id"];
          }
        ];
      };
      blog_posts: {
        Row: {
          blog_id: number;
          title: string;
          slug: string;
          content: string;
          cover_image_url: string | null;
          author_name: string | null;
          published_at: string | null;
          is_published: boolean;
        };
        Insert: Partial<Database["public"]["Tables"]["blog_posts"]["Row"]> & {
          title: string;
          slug: string;
          content: string;
        };
        Update: Partial<Database["public"]["Tables"]["blog_posts"]["Row"]>;
        Relationships: [];
      };
      faq_categories: {
        Row: {
          faq_category_id: number;
          name: string;
          display_order: number | null;
        };
        Insert: Partial<
          Database["public"]["Tables"]["faq_categories"]["Row"]
        > & {
          name: string;
        };
        Update: Partial<Database["public"]["Tables"]["faq_categories"]["Row"]>;
        Relationships: [];
      };
      faq_items: {
        Row: {
          faq_item_id: number;
          faq_category_id: number;
          question: string;
          answer: string;
          display_order: number | null;
        };
        Insert: Partial<Database["public"]["Tables"]["faq_items"]["Row"]> & {
          faq_category_id: number;
          question: string;
          answer: string;
        };
        Update: Partial<Database["public"]["Tables"]["faq_items"]["Row"]>;
        Relationships: [
          {
            foreignKeyName: "faq_items_faq_category_id_fkey";
            columns: ["faq_category_id"];
            referencedRelation: "faq_categories";
            referencedColumns: ["faq_category_id"];
          }
        ];
      };
      settings: {
        Row: {
          settings_id: number;
          current_event_id: number | null;
          primary_cta_label: string | null;
          primary_cta_url: string | null;
          contact_email: string | null;
          social_links: Json | null;
        };
        Insert: Partial<Database["public"]["Tables"]["settings"]["Row"]> & {
          settings_id: number;
        };
        Update: Partial<Database["public"]["Tables"]["settings"]["Row"]>;
        Relationships: [
          {
            foreignKeyName: "settings_current_event_id_fkey";
            columns: ["current_event_id"];
            referencedRelation: "events";
            referencedColumns: ["event_id"];
          }
        ];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

export type Tables = Database["public"]["Tables"];
export type TableNames = keyof Tables;

export type TableRow<T extends TableNames> = Tables[T]["Row"];
export type TableInsert<T extends TableNames> = Tables[T]["Insert"];
export type TableUpdate<T extends TableNames> = Tables[T]["Update"];
