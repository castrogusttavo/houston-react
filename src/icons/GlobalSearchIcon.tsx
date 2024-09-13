import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GlobalSearchIcon({
  iconName = 'global-search',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
