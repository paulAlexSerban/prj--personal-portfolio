export const GA_MEASUREMENT_ID = 'G-MNGBFKWWK5';

export const pageview = (id) => {
    window.gtag('config', id, {
        page_path: url,
    });
};

export const event = ({ action, category, label, value }) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value,
    });
};
