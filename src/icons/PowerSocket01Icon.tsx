import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PowerSocket01Icon({
  iconName = 'power-socket-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
