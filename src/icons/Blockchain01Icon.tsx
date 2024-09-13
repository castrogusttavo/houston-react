import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Blockchain01Icon({
  iconName = 'blockchain-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
