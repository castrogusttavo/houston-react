import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HotspotIcon({ iconName = 'hotspot', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
