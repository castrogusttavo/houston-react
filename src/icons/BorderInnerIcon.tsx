import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BorderInnerIcon({
  iconName = 'border-inner',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
