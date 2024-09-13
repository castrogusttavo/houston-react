import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ClosedCaptionIcon({
  iconName = 'closed-caption',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
