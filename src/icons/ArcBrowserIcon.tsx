import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArcBrowserIcon({
  iconName = 'arc-browser',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
