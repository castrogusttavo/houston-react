import React from 'react'
import { Icon, IconProps } from '../Icon'

export function KeyframeAlignHorizontalIcon({
  iconName = 'keyframe-align-horizontal',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
