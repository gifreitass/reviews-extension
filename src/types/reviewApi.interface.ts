export interface Reviews {
    data: Data;
    error: number;
    error_msg: null;
}

export interface Data {
    ratings: Rating[];
    item_rating_summary: ItemRatingSummary;
    is_sip_item: boolean;
    rcmd_algo: string;
    downgrade_switch: boolean;
    has_more: boolean;
    show_local_review: boolean;
    browsing_ui: string;
    enable_buyer_gallery_media: boolean;
    user_latest_rating: null;
    size_info_abt: string;
    top_ratings: any[];
    resize_image_abt: boolean;
    purchase_bar_abt: string;
    tag_filters: any[];
    signature: string;
}

export interface ItemRatingSummary {
    rating_total: number;
    rating_count: number[];
    rcount_with_context: number;
    rcount_with_image: number;
    rcount_with_media: number;
    rcount_local_review: number;
    rcount_repeat_purchase: number;
    rcount_overall_fit_small: number;
    rcount_overall_fit_fit: number;
    rcount_overall_fit_large: number;
    rcount_oversea_review: number;
    rcount_folded: number;
}

export interface Rating {
    orderid: number;
    itemid: number;
    cmtid: number;
    ctime: number;
    rating: number;
    userid: number;
    shopid: number;
    comment: string;
    rating_star: number;
    status: number;
    mtime: number;
    editable: number;
    opt: number;
    filter: number;
    mentioned: any[];
    is_hidden: boolean;
    author_username: string;
    author_portrait: string;
    author_shopid: number;
    anonymous: boolean;
    images: string[];
    videos: Video[];
    product_items: ProductItem[];
    delete_reason: null;
    delete_operator: null;
    ItemRatingReply: null;
    tags: null;
    editable_date: number | null;
    show_reply: null;
    like_count: number | null;
    liked: null;
    sync_to_social: boolean;
    detailed_rating: DetailedRating;
    exclude_scoring_due_low_logistic: boolean;
    loyalty_info: null;
    template_tags: TemplateTag[];
    has_template_tag: boolean;
    sync_to_social_toggle: null;
    sip_info: SIPInfo;
    is_repeated_purchase: boolean;
    display_variation_filter: boolean | null;
    overall_fit: number;
    is_normal_item: boolean;
    viewed: null;
    show_view: null;
    sync_to_social_detail: null;
    profile: null;
    size_info_tags: null;
    size_info_abt: string;
    image_data: ImageDatum[];
    key_media: KeyMedia;
    is_super_review: boolean;
    super_reviewer_tag: any[];
    is_newly_created: null;
    template_hints: null;
    template_tags_hints: null;
    region: string;
    original_item_info: OriginalItemInfo;
    template_abt: null;
    is_repeat_edited: null;
    show_super_review_tag: boolean;
    super_review_status: number;
}

export interface DetailedRating {
    product_quality: number;
    seller_service: number;
    delivery_service: number;
}

export interface ImageDatum {
    image_id: string;
    cover_image_id: string;
}

export interface KeyMedia {
    key_media_code: number;
    key_media_id: string;
}

export interface OriginalItemInfo {
    itemid: number;
    shopid: number;
    name: string;
    image: string;
}

export interface ProductItem {
    itemid: number;
    shopid: number;
    name: string;
    image: string;
    is_snapshot: number;
    snapshotid: number;
    modelid: number;
    model_name: string;
    options: string[];
}

export interface SIPInfo {
    is_oversea: boolean;
    origin_region: string;
}

export enum TemplateTag {
    ParecidoCOMAnúncio = "Parecido com anúncio",
    Qualidade = "Qualidade",
}

export interface Video {
    id: string;
    cover: string;
    url: string;
    duration: number | null;
    upload_time: null;
    mms_ext: string;
    cover_image_id: CoverImageID;
    highlight: Video | null;
}

export enum CoverImageID {
    Empty = "",
    Sg1113420622120Fcww821Vzklvb9 = "sg-11134206-22120-fcww821vzklvb9",
}
