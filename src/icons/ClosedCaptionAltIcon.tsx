import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ClosedCaptionAltIcon({
  iconName = 'closed-caption-alt',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
