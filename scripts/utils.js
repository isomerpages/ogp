export const functionNameToFunctionId = {
    'Software Engineering': 'eng',
    'Product Management': 'pm',
    'Corporate Team': 'corporate',
    'People Team': 'corporate',
    'Marketing Team': 'corporate',
    'Corporate Operations': 'corporate',
    'Product Design': 'design',
    'Product Operations': 'ops',
    'Partnerships & Transformation': 'transformation',
    'Policy & Transformation': 'transformation',
}

export const functionIdToFunctionName = {
    corporate: 'Corporate Team',
    eng: 'Software Engineering',
    pm: 'Product Management',
    design: 'Product Design',
    ops: 'Product Operations',
    transformation: 'Policy & Transformation',
}

export function getCleanList(items) {
    return (items || '')
        .split(/[\r\n]+/)
        .map(item => item.trim()
            .replace(/^[*•-]\s*/, '') // remove bullet points
            .replace(/ {2,}/g, ' ') // collapse multi-spaces to single-space
        )
        .filter(v => v)
}
