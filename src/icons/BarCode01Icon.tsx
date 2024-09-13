import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BarCode01Icon({
  iconName = 'bar-code-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
