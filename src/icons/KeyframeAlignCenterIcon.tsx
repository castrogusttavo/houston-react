import React from 'react'
import { Icon, IconProps } from '../Icon'

export function KeyframeAlignCenterIcon({
  iconName = 'keyframe-align-center',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
