import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SquareLock01Icon({
  iconName = 'square-lock-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
