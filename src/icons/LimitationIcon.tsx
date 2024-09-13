import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LimitationIcon({
  iconName = 'limitation',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
