import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextCenterlineCenterTopIcon({
  iconName = 'text-centerline-center-top',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
