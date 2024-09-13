import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Calculator01Icon({
  iconName = 'calculator-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
