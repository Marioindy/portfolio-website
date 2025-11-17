'use client';

import React from 'react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

/**
 * Simple markdown renderer component
 * Handles basic markdown syntax without external dependencies
 */
export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className = '',
}) => {
  const renderMarkdown = (markdown: string): string => {
    let html = markdown;

    // Headers (h1-h6)
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

    // Italic
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

    // Code blocks
    html = html.replace(
      /```(\w+)?\n([\s\S]*?)```/gim,
      '<pre><code class="language-$1">$2</code></pre>'
    );

    // Inline code
    html = html.replace(/`([^`]+)`/gim, '<code>$1</code>');

    // Links
    html = html.replace(
      /\[([^\]]+)\]\(([^\)]+)\)/gim,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    );

    // Unordered lists
    html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

    // Ordered lists
    html = html.replace(/^\d+\. (.*$)/gim, '<li>$1</li>');

    // Blockquotes
    html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');

    // Horizontal rules
    html = html.replace(/^---$/gim, '<hr>');

    // Paragraphs (split by double newline)
    const paragraphs = html.split('\n\n');
    html = paragraphs
      .map((para) => {
        // Don't wrap already wrapped elements
        if (
          para.startsWith('<h') ||
          para.startsWith('<ul') ||
          para.startsWith('<ol') ||
          para.startsWith('<pre') ||
          para.startsWith('<blockquote') ||
          para.startsWith('<hr')
        ) {
          return para;
        }
        return `<p>${para.replace(/\n/g, '<br>')}</p>`;
      })
      .join('\n');

    return html;
  };

  const htmlContent = renderMarkdown(content);

  return (
    <div
      className={`prose ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};
