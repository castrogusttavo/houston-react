import React from 'react'
import { Icon, IconProps } from '../Icon'

export function KeyframeBottomIcon({
  iconName = 'keyframe-bottom',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
