document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');

    fetch('projects.json')
        .then(response => response.json())
        .then(projects => {
            projects.forEach(project => {
                const card = document.createElement('div');
                card.className = 'project-card rounded-2xl p-8 flex flex-col justify-between group relative';

                // Badge HTML if it exists
                const badgeHtml = project.badge 
                    ? `<span class="absolute top-4 left-8 px-1.5 py-0.5 bg-black text-white text-[9px] uppercase font-bold tracking-wider rounded">${project.badge}</span>` 
                    : '';
                
                // Title section
                const titleHtml = `<h3 class="text-lg font-bold text-black mt-2">${project.title}</h3>`;

                // Link HTML
                const linkHtml = (project.link && project.link !== '#') 
                    ? `<a href="${project.link}" target="_blank" class="text-neutral-400 hover:text-black transition-colors">
                           <i data-lucide="external-link" class="w-5 h-5"></i>
                       </a>`
                    : '';

                // Tags HTML
                const tagsHtml = project.tags.map(tag => 
                    `<span class="px-2 py-1 bg-neutral-100 border border-neutral-200 rounded text-xs font-mono text-neutral-600">${tag}</span>`
                ).join('');

                card.innerHTML = `
                    ${badgeHtml}
                    <div>
                        <div class="flex justify-between items-start mb-4">
                            ${titleHtml}
                            ${linkHtml}
                        </div>
                        <p class="text-neutral-600 text-sm mb-6 leading-relaxed">
                            ${project.description}
                        </p>
                    </div>
                    <div class="flex gap-2 flex-wrap">
                        ${tagsHtml}
                    </div>
                `;

                projectsContainer.appendChild(card);
            });
            
            // Re-initialize Lucide icons for the newly added elements
            lucide.createIcons();
        })
        .catch(error => console.error('Error loading projects:', error));
});
