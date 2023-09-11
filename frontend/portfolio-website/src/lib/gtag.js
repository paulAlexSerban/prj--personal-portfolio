export const GA_MEASUREMENT_ID = 'G-MNGBFKWWK5';

export const pageViewEvent = (url) => {
    window.gtag &&
        window.gtag('config', GA_MEASUREMENT_ID, {
            page_path: url,
        });
};

export const event = ({ action, category, label, value }) => {
    window.gtag &&
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value,
        });
};
