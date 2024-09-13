import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GlobalRefreshIcon({
  iconName = 'global-refresh',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
