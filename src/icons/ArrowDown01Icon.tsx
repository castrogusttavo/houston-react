import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArrowDown01Icon({
  iconName = 'arrow-down-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
