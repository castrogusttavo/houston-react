import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HairClipsIcon({
  iconName = 'hair-clips',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
