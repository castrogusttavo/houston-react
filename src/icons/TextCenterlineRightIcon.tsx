import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextCenterlineRightIcon({
  iconName = 'text-centerline-right',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
