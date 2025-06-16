import heroesData from './data.json';

const heroes = heroesData.heroes;

export const arbreNodes = heroes.map(h => ({
    id: h.name,
    position: { x: h.x, y: h.y },
    data: { ...h, heroId: h.id },
    type: h.type === 'union' ? 'union' : 'custom',

}));

export const arbreEdges = heroes.flatMap(h =>
    (h.targets || []).map(t => {
        const targetObj = typeof t === 'string' ? { target: t } : t;
        return {
            id: `e${h.name}-${targetObj.target}`,
            source: h.name,
            target: targetObj.target,
            type: 'smoothstep',
            sourceHandle: targetObj.sourceHandle || 'bottom',
            targetHandle: targetObj.targetHandle || 'top'
        };
    })
);