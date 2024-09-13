import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BorderFullIcon({
  iconName = 'border-full',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
