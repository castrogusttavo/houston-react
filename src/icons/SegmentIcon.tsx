import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SegmentIcon({ iconName = 'segment', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
