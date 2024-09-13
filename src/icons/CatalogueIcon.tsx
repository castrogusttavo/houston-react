import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CatalogueIcon({ iconName = 'catalogue', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
