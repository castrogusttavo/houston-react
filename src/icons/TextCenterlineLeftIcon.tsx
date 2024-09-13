import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextCenterlineLeftIcon({
  iconName = 'text-centerline-left',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
