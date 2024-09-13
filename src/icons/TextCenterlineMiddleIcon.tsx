import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextCenterlineMiddleIcon({
  iconName = 'text-centerline-middle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
