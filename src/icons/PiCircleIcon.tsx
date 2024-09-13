import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PiCircleIcon({ iconName = 'pi-circle', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
