import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Sheriff01Icon({
  iconName = 'sheriff-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
