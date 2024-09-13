import React from 'react'
import { Icon, IconProps } from '../Icon'

export function KeyframeRemoveIcon({
  iconName = 'keyframe-remove',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
