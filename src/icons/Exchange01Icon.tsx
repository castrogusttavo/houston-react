import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Exchange01Icon({
  iconName = 'exchange-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
