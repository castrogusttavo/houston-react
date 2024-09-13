import React from 'react'
import { Icon, IconProps } from '../Icon'

export function KeyframeAlignVerticalIcon({
  iconName = 'keyframe-align-vertical',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
