import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Bitcoin01Icon({
  iconName = 'bitcoin-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
