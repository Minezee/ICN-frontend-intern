type RelatedCard = {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: boolean;
    };
    author: number;
    featured_media: number;
    template: string;
    meta: any[]; // You can replace 'any' with a more specific type if needed
    categories: number[];
    tags: number[];
    acf: {
        "meta-desc": string;
    };
    _links: {
        self: [
            {
                href: string;
            }
        ];
        collection: [
            {
                href: string;
            }
        ];
        about: [
            {
                href: string;
            }
        ];
        author: [
            {
                embeddable: boolean;
                href: string;
            }
        ];
        "wp:featuredmedia": [
            {
                embeddable: boolean;
                href: string;
            }
        ];
        "wp:attachment": [
            {
                href: string;
            }
        ];
        "wp:term": [
            {
                taxonomy: string;
                embeddable: boolean;
                href: string;
            },
            {
                taxonomy: string;
                embeddable: boolean;
                href: string;
            }
        ];
        curies: [
            {
                name: string;
                href: string;
                templated: boolean;
            }
        ];
    };
};

export type RelatedResponse = RelatedCard[];