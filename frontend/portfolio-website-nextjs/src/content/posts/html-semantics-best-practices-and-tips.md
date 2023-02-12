---
title: "HTML Semantics"
subheading: "Best Practices and Tips for Better Web Development"
excerpt: "HTML semantics play a crucial role in web development as they provide context to web content. It helps web browsers, search engines, and assistive technologies understand the structure and purpose of the content. There are several best practices for using HTML semantics, including using descriptive HTML tags, using ARIA roles, using microdata, using nested HTML tags correctly, using form semantics, and validating HTML. "
status: "published"
author: "Paul Serban"
date: "January 24, 2019"
tags:
    - "Web Development"
    - "HTML"
    - "Accessibility"
    - "SEO"
---

HTML semantics refer to the use of HTML tags to describe the meaning and structure of web content. HTML tags provide a way to give context to content, making it easier for web browsers, search engines, and assistive technologies to understand the content and how it should be displayed.

## Some best practices and tips for using HTML semantics in web development:

-   **Use descriptive HTML tags**: HTML tags such as `header`, `footer`, `nav`, `main`, `section`, `article`, and `aside` are designed to describe the purpose of the content they contain. For example, the header tag should be used to contain the header of a web page, and the footer tag should be used to contain the footer.
-   **Use ARIA roles**: ARIA (Accessible Rich Internet Applications) roles are a way to provide additional information about the purpose of an HTML element. For example, you could use the role="navigation" attribute to indicate that an element is a navigation menu.
-   **Use microdata**: Microdata is a way to provide additional information about the content on a web page to search engines and other tools. For example, you could use microdata to provide information about the author, publication date, and other details of a blog post.
-   **Use nested HTML tags correctly**: HTML tags should be nested correctly to reflect the structure of the content. For example, if you have a header that contains a logo and a navigation menu, the logo should be wrapped in a separate div element, and the navigation menu should be wrapped in another div element.
-   **Use form semantics**: When creating forms, use HTML tags such as label, input, and select to provide context to the form elements. For example, use the label tag to provide a label for a form input, and use the input tag to create form fields.
-   **Validate HTML**: Always validate your HTML using a tool such as the W3C Markup Validation Service to ensure that your HTML is well-formed and meets the latest standards.

By following these best practices and tips, you can create web pages with clear, descriptive HTML semantics that are easier for web browsers, search engines, and assistive technologies to understand. This can lead to better search engine optimization (SEO), improved accessibility, and better user experiences for your users.

## HTML5 specific semantic elements

The HTML5 specification provides semantic elements to define the structure and content of a web page. These elements are used to improve accessibility and help search engines understand the content of a page.

Here's a brief explanation of each element:

-   `main`: Represents the main content of the document. There should only be one main element per page.
-   `section`: Represents a standalone section of a document, such as a chapter, tabbed content, or any other thematic grouping of content.
-   `article`: Represents a complete, standalone piece of content, such as a blog post or news story.
-   `header`: Represents the header of a document or section. It typically contains introductory content, such as a logo, site navigation, or page title.
-   `footer`: Represents the footer of a document or section. It typically contains information about the author, copyright information, and links to related content.
-   `nav`: Represents a section of a page that contains navigation links, such as a site navigation menu.

## What are the best practices?

Here are some best practices for using HTML semantic elements:

-   Use semantic elements to accurately describe the content they contain.
-   Use `main` only once per page and make sure it contains the main content of the page.
-   Use `header` and footer for their intended purposes, such as providing site navigation or copyright information.
-   Use `section` to define sections of content that are related and have a specific purpose.
-   Use `article` to define self-contained content that could be independently distributed, such as a blog post or news article.
-   Use `nav` for site navigation only, and make sure it contains links to the most important sections of your site.
-   Consider using ARIA (Accessible Rich Internet Applications) attributes to provide additional information about the structure and role of elements on your page.
-   Use CSS to control the appearance of elements and create a consistent design.
-   Validate your HTML to ensure that it is well-formed and meets web standards.

By following these best practices, you can create accessible, semantically meaningful, and well-structured web pages that are easy for search engines and users to understand.

## What are the nesting best practices?

When using HTML semantic elements, it's important to follow proper nesting practices to ensure the correct structure and meaning of your content. Here are some best practices for nesting elements:

-   **Nest elements logically**: Elements should be nested in a way that represents the structure and hierarchy of the content they contain.
-   **Use headings correctly**: Use headings (`h1` to `h6`) in order to create a hierarchical structure for your content. Start with `h1` for the main heading and then use `h2` for subheadings, and so on.
-   **Avoid excessive nesting**: Avoid nesting elements too deeply, as it can lead to confusing and complex HTML structure.
-   **Use semantic elements appropriately**: Use semantic elements to describe the content they contain. For example, use `nav` to contain navigation links and `ul` or `ol` to contain lists.
-   **Avoid unnecessary elements**: Avoid using elements that add no semantic meaning to your content.

By following these best practices, you can create clean, well-structured HTML that accurately represents the content and meaning of your web page. This will help improve accessibility and make your page easier for search engines and users to understand.

## Navigation in the footer of the page, is it ok to use?

Yes, it's perfectly fine to use navigation in the footer of a page. In fact, it's a common practice to include site navigation in both the header and footer of a page, as this provides users with easy access to different sections of your site from anywhere on the page.

When using navigation in the footer, it's important to use the nav element to semantically mark up the navigation links, just as you would in the header. This helps improve accessibility and makes it clear to both users and search engines what the purpose of the navigation links is.

In addition to using the nav element, you should also follow best practices for nesting elements, using headings correctly, and avoiding excessive nesting to ensure that the structure of your HTML accurately represents the content and meaning of your page.

## HTML structuring tips and tricks

Here are some tips and tricks to help you create well-structured, accessible, and semantically meaningful HTML:

-   **Start with a clear outline**: Before you start coding, take some time to plan out the structure and hierarchy of your content. This will help you determine which semantic elements to use and where to place them.
-   **Use ARIA attributes**: ARIA (Accessible Rich Internet Applications) attributes provide additional information about the structure and role of elements on your page. For example, you can use the `role` attribute to specify the role of an element, such as `navigation` for a `nav` element.
-   **Validate your HTML**: Use a HTML validator to check that your HTML is well-formed and meets web standards. This can help you catch common mistakes and ensure that your HTML is accessible to all users, including those using assistive technologies.
-   **Use CSS to enhance the appearance and accessibility of your page**: Use CSS to control the appearance of elements, create a consistent design, and improve accessibility, such as using proper contrast ratios, font sizes, and spacing.
-   **Test your page**: Test your page in different browsers and devices to ensure that it works correctly and is accessible to all users.

By following these tips and tricks, you can create HTML that is semantically meaningful, accessible, and well-structured, which will help improve the user experience and make your page easier for search engines to understand.

## HTML semantics for SEO

Using HTML semantic elements can have a positive impact on your search engine optimization (SEO). Here are a few ways that using semantic HTML can improve your SEO:

-   **Improved accessibility**: Search engines favor accessible, well-structured websites. By using semantic HTML, you can ensure that your page is easily accessible to users and search engines, which can improve your rankings.
-   **Better content organization**: Semantic HTML provides a clear structure for your content, which can help search engines understand the relevance and importance of different elements on your page.
-   **Improved crawlability**: Semantic HTML makes it easier for search engines to crawl and index your content, which can improve your visibility in search results.
-   **Increased click-through rate**: Well-structured HTML can make your page more attractive to users, which can increase your click-through rate and improve your rankings.
-   **Keyword optimization**: Using semantic HTML can help you optimize your content for keywords, as search engines will have a clearer understanding of the context and importance of different elements on your page.

While using semantic HTML is not a guarantee of higher rankings, it is an important aspect of creating a well-structured, accessible, and search engine-friendly website. By using semantic HTML, you can provide a better user experience and make your page easier for search engines to understand, which can help improve your SEO.

## HTML semantics for accessibility

Using HTML semantic elements can greatly improve the accessibility of a web page. Here are some ways that using semantic HTML can help make your page more accessible:

-   **Improved navigation**: Semantic HTML elements, such as header, nav, and footer, provide clear structure and meaning to the content on your page, making it easier for users to navigate and understand.
-   **Improved assistive technology compatibility**: Screen readers, speech recognition software, and other assistive technologies rely on semantic HTML to understand the structure and meaning of content on a page. By using semantic HTML, you can ensure that your page is accessible to a wider range of users, including those with disabilities.
-   **Increased keyboard accessibility**: Semantic HTML elements, such as button, input, and a, can be easily navigated using a keyboard, making it easier for users who cannot use a mouse to interact with your page.
-   **Better headings structure**: Semantic headings (h1 to h6) provide a clear hierarchy for your content, making it easier for users to understand the organization and importance of different sections of your page.
-   **Improved contrast**: Semantic HTML elements can be styled using CSS, allowing you to improve the contrast of your page and make it easier to read for users with visual impairments.

By using semantic HTML, you can create a web page that is more accessible and usable for all users, regardless of their abilities or disabilities. This will help improve the user experience and make your page more inclusive for a wider range of users.

## Some free learning resources

-   [web.dev - Semantic HTML](https://web.dev/learn/html/semantic-html/){target=_blank}
-   [w3schools - HTML5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp){target=_blank}
-   [CodeCademy - Semantic HTML](https://www.codecademy.com/learn/learn-html/modules/learn-semantic-html/cheatsheet){target=_blank}
-   [Semrush - Semantic HTML Guide](https://www.semrush.com/blog/semantic-html5-guide/){target=_blank}
-   [I Like Kill Nerds - How To Correctly Use Semantic HTML5 &lt;article&gt;, &lt;main&gt; and &lt;section&gt; tags](https://ilikekillnerds.com/2014/07/how-to-correctly-use-semantic-html5-article-main-and-section-tags/){target=_blank}
-   [Thoughtco - Why Use Semantic HTML](https://www.thoughtco.com/why-use-semantic-html-3468271){target=_blank}
-   [hackernoon.com - How to Write Semantic HTML](https://hackernoon.com/how-to-write-semantic-html-dkq3ulo){target=_blank}
-   [freeCodeCamp.org/blog - HTML Best Practices – How to Build a Better HTML-Based Website](https://www.freecodecamp.org/news/html-best-practices/){target=_blank}
-   [hubspot.org/blog - Semantic HTML: What It Is and How It Improves Your Site](https://blog.hubspot.com/website/semantic-html){target=_blank}
