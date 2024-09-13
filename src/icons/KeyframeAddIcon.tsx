import React from 'react'
import { Icon, IconProps } from '../Icon'

export function KeyframeAddIcon({
  iconName = 'keyframe-add',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
