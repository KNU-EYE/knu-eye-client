import { CATEGORY_COLORS, CATEGORY_LABELS } from '../../constants/categories.js';

function CategoryBadge({ category }) {
  const className = CATEGORY_COLORS[category] ?? CATEGORY_COLORS.general;
  const label = CATEGORY_LABELS[category] ?? '일반';
  return <span className={`badge ${className}`}>{label}</span>;
}

export default CategoryBadge;
