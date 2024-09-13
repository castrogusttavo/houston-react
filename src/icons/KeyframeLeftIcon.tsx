import React from 'react'
import { Icon, IconProps } from '../Icon'

export function KeyframeLeftIcon({
  iconName = 'keyframe-left',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
