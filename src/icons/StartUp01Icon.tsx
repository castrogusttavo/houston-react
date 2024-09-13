import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StartUp01Icon({
  iconName = 'start-up-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
